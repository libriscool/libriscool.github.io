import{_ as n,b as t,h as e,d as a,a as o}from"./index-a9f90031.js";const s={},r={style:{"white-space":"pre-wrap"}},i=a("h1",null,"Bookstore event log",-1);function h(c,p){return o(),t("pre",r,[e(""),i,e(`
Detailed information about shop events.

The page can be accessed by users with publisher role or by administrators.

If current user have registered more that one shop or he is a portal administrator, he can see events from all shops or choose one.

Shop events examples:
- offered book list have changed (a new book has appeared that matches the store filters)
- new print order have added
- state of a print order have changed
- a new payment transaction have appeared
-...

Shop event info:
- shop
- timestamp
- event level (info, warning, critical, debug)
- event title
- event data (json with additional parameters depending from event type)

The user has the option to subscribe/unsubscribe to email notifications about a new event.
`)])}const l=n(s,[["render",h]]);export{l as default};
