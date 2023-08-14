"use client"
import { Form } from "@/components";
import { z } from 'zod';
import {inventorySchema} from "@/validation/zod/index"


const fields = [
    { label: 'Item Name', name: 'name', placeholder: 'Name', type: 'text', required  : true },
    { label: 'Responsible', name: 'responsible', placeholder: 'Responsible', type: 'text', required  : true  },
    { label: 'Status', name: 'status', placeholder : "--Select status--" ,  
    options: [
        { label  : "In service" , value : "in_service"},
        { label  : "In stock" , value : "in_stock"},
        { label  : "Active" , value : "active"},
        { label  : "Disactive" , value : "disactive"},
    ],
     type: 'select', required  : true },
    { label: 'Installation date', name: 'installation_date', type: 'date',  required  : true },
    { label: 'Brand name', name: 'brand', placeholder: 'Microsoft', type: 'text',  required  : true },
    {
        label: 'Model',
        name: 'model',
        placeholder: 'Model',
        type: 'text',
        required  : true
        
    },
    { label: 'Serial Number', name: 'product_key', placeholder: 'Enter Serial Number', type: 'text',required : true  },
     {
        label: 'IP Address',
        name: 'ip',
        placeholder: 'IP Address',
    },
     { label: 'Physical Location', name: 'physical_location', placeholder: 'Physical Location', type: 'text',required : true   },
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
            {name : "submit" , text  : method ? "Update asset" :  "Create asset"}
        ]}
        />
}

export default Hardware