import{_ as n,b as t,h as e,d as a,a as s}from"./index-a9f90031.js";const o={},i={style:{"white-space":"pre-wrap"}},r=a("h1",null,"Publisher event log",-1);function h(l,c){return s(),t("pre",i,[e(""),r,e(`
Detailed information about publishing house events.

The page can be accessed by users with publisher role or by portal administrators.

If current user have registered more that one publishing house or he is a portal administrator, he can see events from all publishing houses or choose one.

Publishing house events examples:
- a new book have been uploaded
- a book have been ordered for printing
- a new financial transaction has appeared
-...

Publishing house event info:
- publishing house
- timestamp
- event level (info, warning, critical, debug)
- event title
- event data (JSON with additional parameters depending from the event type)

The user has the option to subscribe/unsubscribe to email notifications about a new event.
`)])}const p=n(o,[["render",h]]);export{p as default};
