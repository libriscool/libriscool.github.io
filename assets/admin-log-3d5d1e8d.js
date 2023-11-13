import{_ as n,b as t,h as e,d as o,a as s}from"./index-a9f90031.js";const r={},a={style:{"white-space":"pre-wrap"}},i=o("h1",null,"Event log",-1);function c(l,u){return s(),t("pre",a,[e(""),i,e(`
Detailed information about portal events.

The page can be accessed only by administrators.

Portal event info:
- source (publishing house, printing house, shop or portal)
- source ID (ID of publishing house, printing house, shop or null for general events)
- timestamp
- event level (info, warning, critical, debug)
- event title
- event data (json with additional parameters depending from event type)

Events list management: 
- export, 
- changes the portal logging level (production, developer, debug,...), 

Any user can be subscribed to email notification about new event.
Subscribers management:
- subscribe the user to notifications
- unsubscribe the user from notifications
- change event filter for the subscriber
`)])}const d=n(r,[["render",c]]);export{d as default};
