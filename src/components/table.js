
import { useEffect, useState } from 'react';
import axios from "axios"

export default function Table({ data }) {



    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">
                            UserName
                        </th>
                        <th className="px-6 py-3">
                            Email
                        </th>
                        <th className="px-6 py-3">
                            addresse
                        </th>
                        <th className="px-6 py-3">
                            Position
                        </th>
                        <th className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                {data.map((i) => {
                    return (<tr>
                        <th className="px-6 py-3">
                            {i.username}
                        </th>
                        <th className="px-6 py-3">
                            {i.email}
                        </th>
                        <th className="px-6 py-3">
                            {i.addresse}
                        </th>
                        <th className="px-6 py-3">
                            {i.position}
                        </th>
                        <th className="px-6 py-3">

                        </th>
                    </tr>)







                })}


            </table>
        </div>





    )




}
export async function getStaticProps() {
    const response = await fetch('/api/getdata');
    const data = await response.json();
    return {
        props: { data },
    };
}