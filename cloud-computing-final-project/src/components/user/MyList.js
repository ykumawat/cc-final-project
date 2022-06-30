// import React from 'react'
// // import ZooItem from '../zoo/ZooItem.js'
// // import PoolItem from '../pool/PoolItem'
// // import BbqItem from '../bbq/BbqItem'
// // import TennisItem from '../tenni/TennisItem'
// // import {Link} from 'react-router-dom'
// 
// const MyList = (props) => {
//   const mappedToDoItems = (function() {
//     if (props.list.items.length > 0) {
//       const items = props.list.items.map((item, index) => {
//         return (<ListItem key={index} user={props.locations.user} item={item.item_info} deleteZooLocation={props.deleteListItem}/>)
//       })
//       return zoos
//     } else {
//       return(<p>You have no saved zoos. View NYC zoos <Link to="/zoos"> here</Link></p>)
//     }
// })()
// 
//   return (
//     <div>
//       <h3>Your To Do Items </h3>
//         <div className="ui ordered list">
//             {mappedZoosList}
//         </div>
//       <h3>Your Favorite Pools </h3>
//         <div className="ui ordered list">
//           {mappedPoolsList}
//         </div>
//         <h3>Your Favorite Bbq Spots </h3>
//           <div className="ui ordered list">
//             {mappedBbqsList}
//           </div>
//           <h3>Your Favorite Tennis Courts </h3>
//             <div className="ui ordered list">
//               {mappedTennisList}
//             </div>
//     </div>
//   )
// }
// 
// export default MyList