"use client"
import { Form } from "@/components";
import {inventorySchema} from "@/validation/zod/index"

const fields = [
    { label: 'Item Name', name: 'name', placeholder: 'Name', type: 'text', required  : true },
    { label: 'Responsible', name: 'responsible', placeholder: 'Responsible', type: 'text', required  : true  },
    
    { label: 'Physical Location', name: 'physical_location', placeholder: 'Physical Location', type: 'text',required  : true },
    { label: 'Installation date', name: 'installation_date', type: 'date',  required  : true },
      { label: 'Brand name', name: 'brand', placeholder: 'Brand name', type: 'text',required : true  },
      {
        label: 'Model',
        name: 'model',
        placeholder: 'Model',
        type: 'text',
        
      },
      { label: 'License key', name: 'product_key', placeholder: 'License Key', required : true ,  },
      { label: 'License expiration', name: 'product_key_exp', placeholder: 'License Key', type: 'date',required : true ,  },
      { label: 'Version', name: 'version', placeholder: 'Version', type: 'text',  },
     {
        label: 'IP Address',
        name: 'ip',
        placeholder: 'IP Address',
        type: 'text'
    },
    { label: 'Status', name: 'status', placeholder : "--Select status--" ,  options: [
        { label  : "In service" , value : "in_service"},
        { label  : "In stock" , value : "in_stock"},
        { label  : "Active" , value : "active"},
        { label  : "Disactive" , value : "disactive"},

    ] , type: 'select',  },
    { label: 'Note', name: 'note', type: 'textarea', placeholder: 'Write your thoughts here...' },
  ]
  
const Hardware = ({data , defaultValues , method}) => {
        return  <Form
        data={data}
        as="modal"
        method={method}
        endpoint="/inventory"
        redirect="/chef-department/dashboard/inventory"
        fields={fields}
        split={2}
        defaultValues={defaultValues}
        schema={inventorySchema}
        actions={[
            {name : "submit" , text  : method ? "Update inventory" :  "Create inventory"}
        ]}
        />
}

export default Hardware