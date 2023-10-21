"use client"
import { Card, Title, BarChart, Subtitle } from "@tremor/react";

// labels: ['Server', 'NoteBook ', 'Other Computer', 'DeskTop', 'Cloud Insatnce', 'Virtual Machine', 'Others'],
//       datasets: [{
//         label: 'Category BreakDown',
//         data: [12, 22, 22, 44, 22, 22, 22],
//         borderColor: 'rgb(231, 76, 60 )',
//         backgroundColor: 'rgb(173, 172, 180)',
//       }]


const chartdata = [
  {
    name: "Server",
    "Quantity of items in each category": 12,
  },
  {
    name: "Desktop",
    "Quantity of items in each category": 18,
  },
  {
    name: "Cloud_Insatnce",
    "Quantity of items in each category": 22,
  },
  {
    name: "VM",
    "Quantity of items in each category": 19, 
  },
// {
//     name: "Notebook",
//     "Quantity of items in each category": 4,
//   },
{
    name: "Others",
    "Quantity of items in each category": 30,
},
];

const dataFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString();
};

export default function EnvBarChart ()  {
    return (
        <Card>
            <Title> IT Equipment Inventory in (2023)</Title>
            <Subtitle>
            This bar chart displays the distribution of IT equipment items among different categories.
            </Subtitle>
            <BarChart
            className="mt-6"
            data={chartdata}
            index="name"
            categories={["Quantity of items in each category"]}
            colors={["blue"]}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
            />
        </Card>
    )
   
}