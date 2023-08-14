


const TicketPage = () => {

    return (
        <div>
            <div className='overflow-hidden grid lg:grid-cols-3 gap-2 ps-8 px-6'>
                <div></div>

                <div></div>
                <button className=" w-60 h-ç px-6 m-2 text-lg text-indigo-100  transition-colors duration-150 bg-red-500 rounded-full focus:shadow-outline  " type="submit">My Tickets</button>

            </div>
            <div className="  bg-white  justify-between  border p-8 m-8 rounded-lg">
                <div className="font-bold text-xl underline">New Ticket </div>
                <div className="  container  grid grid-cols-2 gap m-7">
                    <div className="bg-white ">

                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Request Type</label>
                        <select id="small" className="block w-2/3 p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select Request Type</option>
                            <option >Incident</option>
                            <option > Request for information </option>
                            <option >Service Request</option>

                        </select>
                        <label for="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                        <select id="default" className="bg-gray-50 border border-gray-300 text-gray-900 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Open</option>
                            <option >On Hold</option>
                            <option >Closed</option>
                            <option >Resolved</option>
                            <option >Canceled</option>
                        </select>
                        <label for="large" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Impact</label>
                        <select className="block w-2/3 md:2/5 px-4 mb-6 py-3  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option >Affects Department</option>
                            <option >Affects user</option>
                            <option >Affects Group</option>

                        </select>





                    </div>

                    <div className="">
                        <label for="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Urgency</label>
                        <select id="default" className="bg-gray-50 border border-gray-300 text-gray-900 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select Urgency</option>
                            <option >Low</option>
                            <option >Normal</option>
                            <option >Urgent</option>

                        </select>
                        <label for="default" className="block mb-2 text-sm font-medium pt-1 text-gray-900 dark:text-white">Category
                        </label>
                        <select id="default" className="bg-gray-50 border border-gray-300 text-gray-900 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select Category</option>
                            <option >Desktop Hardware</option>
                            <option >General</option>
                            <option >Services</option>
                            <option >Software</option>
                            <option >Switches</option>
                            <option >Others</option>
                        </select>

                        <form className="flex items-center pt-9 gap-5">
                            <label for="default" className="  block mb-2 text-l font-medium text-gray-900 dark:text-white">Asset
                            </label>
                            <div className="relative w-80">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Asset name..." required />
                            </div>

                        </form>




                    </div>

                </div>


                <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
                <form  className="ml-6">
                    <div className="font-bold text-l underline">Requester Details Section </div>

                    <div className="">
                        <label for="first_name" className="block mb-2 mt-6 text-sm font-medium text-gray-900 dark:text-white">Requester Name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Requester Name" required />
                    </div>
                    <label for="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Group</label>
                        <select id="default" className="bg-gray-50 border border-gray-300 text-gray-900 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select Group</option>
                            <option >Search</option>
                            
                        </select>
                        <label for="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technician</label>
                        <select id="default" className="bg-gray-50 border border-gray-300 text-gray-900 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select Technician</option>
                           

                        </select>
     
<label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
<textarea id="message" rows="4" className="block p-2.5 w-2/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>





                </form>
                <div class="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I'm Sure <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Request</button>
            </div>



        </div>


    )
}
export default TicketPage