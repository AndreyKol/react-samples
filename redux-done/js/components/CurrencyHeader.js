/**
 * Created by akolodnitskiy on 5/30/16.
 */
import React,{Component} from 'react';

class CurrencyHeader extends Component{
   render(){
     return(
       <thead>
       <tr>
         <td>
           Currency Pair
         </td>
         <td>Rate</td>
         <td>Actions</td>
       </tr>
       </thead>
     );
   }
}

export default CurrencyHeader;
