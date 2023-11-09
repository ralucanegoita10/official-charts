// import moment from "moment";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import TitleCard from "../../components/Cards/TitleCard";
// import { openModal } from "../common/modalSlice";
// import { deleteLead, getLeadsContent } from "./leadSlice";
// import {
//   CONFIRMATION_MODAL_CLOSE_TYPES,
//   MODAL_BODY_TYPES,
// } from "../../utils/globalConstantUtil";
// import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
// import { showNotification } from "../common/headerSlice";

// const TopSideButtons = () => {
//   const dispatch = useDispatch();

//   const openAddNewLeadModal = () => {
//     dispatch(
//       openModal({
//         title: "Add New Lead",
//         bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW,
//       })
//     );
//   };

//   return (
//     <div className="inline-block float-right">
//       <button
//         className="btn px-6 btn-sm normal-case btn-primary"
//         onClick={() => openAddNewLeadModal()}
//       >
//         Add New
//       </button>
//     </div>
//   );
// };

// function Leads() {
//   const { leads } = useSelector((state) => state.lead);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getLeadsContent());
//   }, []);

//   const getDummyStatus = (index) => {
//     if (index % 5 === 0) return <div className="badge">Not Interested</div>;
//     else if (index % 5 === 1)
//       return <div className="badge badge-primary">In Progress</div>;
//     else if (index % 5 === 2)
//       return <div className="badge badge-secondary">Sold</div>;
//     else if (index % 5 === 3)
//       return <div className="badge badge-accent">Need Followup</div>;
//     else return <div className="badge badge-ghost">Open</div>;
//   };

//   const deleteCurrentLead = (index) => {
//     dispatch(
//       openModal({
//         title: "Confirmation",
//         bodyType: MODAL_BODY_TYPES.CONFIRMATION,
//         extraObject: {
//           message: `Are you sure you want to delete this lead?`,
//           type: CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE,
//           index,
//         },
//       })
//     );
//   };

//   function generateRandomValue() {
//     return Math.random() < 0.1 ? "NEW" : Math.floor(Math.random() * 10) + 1;
//   }

  

//   return (
//     <>
//       <TitleCard
//         title="Latest Charts"
//         topMargin="mt-2"
//         TopSideButtons={<TopSideButtons />}
//       >
//         {/* Leads List in table format loaded from slice after api call */}
//         <div className="overflow-x-auto w-full">
//           <table className="table w-full">
//             <thead>
//               <tr>
//                 <th>Pos</th>
//                 <th>LW</th>
//                 <th>Album photo</th>
//                 <th>Title</th>
//                 <th>DUS</th>
//                 <th>Physical</th>
//                 <th>Download</th>
//                 <th>Streams</th>
//               </tr>
//             </thead>
//             <tbody>
              
//               {leads.map((l, k) => {
//                 const randomValue = generateRandomValue();
//                 return (
//                   <tr key={k}>
//                     {/* Pos */}
//                     <td>{k + 1}</td>
//                     {/* LW */}
//                     <td>
//                       {randomValue === "NEW" ? (
//                         <p>{"NEW"}</p>
//                       ) : (
//                         <p>{randomValue}</p>
//                       )}
//                     </td>
//                     {/* Album Photo */}
//                     <td>
//                       <div className="flex items-center space-x-3">
//                         <div className="avatar">
//                           <div className="mask mask-squircle w-12 h-12">
//                             <img src={l.avatar} alt="Avatar" />
//                           </div>
//                         </div>
                        
//                       </div>
//                     </td>
//                     {/* Title */}
//                     <td>
//                       <div className="flex items-center space-x-3">
//                         <div>
//                           <div className="font-bold">{l.first_name}</div>
//                           <div className="text-sm opacity-50">
//                             {l.last_name}
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                     {/* DUS */}
//                     <td>{"18,923"}</td>
//                     {/* Physical */}
//                     <td>
//                       {"3,445"}
//                       {/* {moment(new Date())
//                         .add(-5 * (k + 2), "days")
//                         .format("DD MMM YY")} */}
//                     </td>
//                     {/* Download */}
//                     <td> {"21,345"}</td>
//                     {/* <td>{getDummyStatus(k)}</td> */}
//                     {/* Streams */}
//                     <td>{"34,675"}</td>
//                     {/* <td>
//                       <button
//                         className="btn btn-square btn-ghost"
//                         onClick={() => deleteCurrentLead(k)}
//                       >
//                         <TrashIcon className="w-5" />
//                       </button>
//                     </td> */}
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </TitleCard>
//     </>
//   );
// }

// export default Leads;
