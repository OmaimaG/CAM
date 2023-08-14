import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import db from "@/lib/prisma"
import {  columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { Button } from "@/components"
import Link from "next/link"
import {getSession} from "@/lib/session"
import transporter from "@/lib/nodemailer"
import cron from 'node-cron'; 

export const metadata = {
  title: "Inventory",
  description: "Manage inventory",
}

async function checkAndNotifyAdmin(data : any , session : any){
    
  try {
    const today =  new Date()
    const tenDaysLater = new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000); // 10 days in milliseconds

    const softwareExpires = data.filter((p : any)=> p.type === "software").filter((product:any) => {
      const expirationDate = new Date(product.product_key_exp as string);
      return expirationDate >= today && expirationDate <= tenDaysLater;
    });
    
    if (softwareExpires.length > 0) {
      let emailContent = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
            .product {
              margin-bottom: 20px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
            }
          </style>
        </head>
        <body>
          <h2>Software products close to expiration (${softwareExpires.length}):</h2>
    `;
  
    softwareExpires.forEach((product : any, index : number) => {
      emailContent += `
        <div class="product">
          <h3>Product Name: ${product.name}</h3>
          <p>Expiration Date: ${product.product_key_exp}</p>
          <p>Click <a href="${`${process.env.NEXT_PUBLIC_APP_URL}/chef-department/dashboard/inventory/${product.id}`}">here</a> for more details.</p>
        </div>
      `;
    });
  
    emailContent += `
        </body>
      </html>
    `;
  
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: session?.user.email,
      subject: "Software Expiration Notification",
      text: emailContent,
      html: emailContent,
    };

  await transporter.sendMail(mailOptions);
  }
  } catch (error) {
    console.error("Error:", error);
  }
}

export default async function RolePage() {
  const session = await getSession()
  const data = await db.inventory.findMany({
   orderBy: [
    {
      created_at: 'desc',
    },
  ],
  })
  

  // START EVERY 10 DAYS
  cron.schedule('0 3 */10 * *', () => checkAndNotifyAdmin(data , session));

  // cron.schedule('* * * * *', () => {
  //   console.log('running a task every minute');
  //   checkAndNotifyAdmin(data , session);
  // });

  return (
    <DashboardShell>
      <DashboardHeader heading="Inventory table" text="Inventory desc" > </DashboardHeader>
      <div className="grid gap-10">
        <DataTable columns={columns} data={data} />
      </div>
    </DashboardShell>
  )
}
