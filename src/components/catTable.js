
import { useEffect, useState } from 'react';
import axios from "axios"

export default function Table({ data }) {
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-black  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th className="px-6 py-3">
                     Name
                  </th>
                  <th className="px-6 py-3">
                     Type
                  </th>
                
              </tr>
          </thead>
          {data.map((i) => {
              return (<tr>
                  <th className="px-6 py-3 text-black text-sm">
                      {i.name}
                  </th>
                  <th className="px-6 py-3 text-black text-sm">
                      {i.description}
                  </th>
                 
              </tr>)
          })}

      </table>
  </div>
    );
  };

export async function getStaticProps() {
    const response = await fetch('/api/asset/get');
    const data = await response.json();
    return {
        props: { data },
    };
}