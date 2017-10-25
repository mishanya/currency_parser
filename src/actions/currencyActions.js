// import * as types from '../constants/ActionTypes';

// export function updateRate(currency) {

//   let urlAPI = `http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.xchange where pair in ( "RUBUSD", "RUBEUR", "RUBGBP")&env=store://datatables.org/alltableswithkeys`;
//   // return (dispatch) => {
//   //   dispatch(updateRate(currency));

//   $.ajax({
//     url: urlAPI,
//     jsonp: "callback",
//     dataType: "jsonp",
//     success: function (response) {
//        console.log(JSON.stringify(response)); // server response
//     }
//   });
//     // dispatch({
//     //   currency: types.UPDATE_RATE,
//     //   currency
//     // });

//   // }
// }




export function addCurrency(currency) {
  return {
      type: 'ADD_CURRENCY',
      payload: currency
    };

    // dispatch(updatePrice(company))
}
