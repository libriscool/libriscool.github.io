import{_ as n,b as t,h as e,d as a,a as r}from"./index-a9f90031.js";const s={},i={style:{"white-space":"pre-wrap"}},o=a("h1",null,"Printhouse event log",-1);function c(h,p){return r(),t("pre",i,[e(""),o,e(`
Detailed information about printing house events.

The page can be accessed by users with printman role or by administrators.

If current user have registered more that one printing house or he is a portal administrator, he can see events from all printing houses or choose one.

Printing house events examples:
- a new printing order is placed
- state of order is changed
- a new financial transaction has appeared
-...

Printing house event info:
- printing house
- timestamp
- event level (info, warning, critical, debug)
- event title
- event data (json with additional parameters depending from event type)

The user has the option to subscribe/unsubscribe to email notifications about a new event.
`)])}const l=n(s,[["render",c]]);export{l as default};
