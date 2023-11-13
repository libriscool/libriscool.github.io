import{_ as n,b as r,h as e,d as t,a as o}from"./index-a9f90031.js";const i={},a={style:{"white-space":"pre-wrap"}},s=t("h1",null,"Print orders",-1);function d(l,c){return o(),r("pre",a,[e(""),s,e(`
Detailed information about book print orders and order management.

The page can be accessed by users with printman role or by administrators.

If current user have registered more that one printing house or he is a portal administrator, he can see orders from all printing houses or choose one.

Order information:
- state (pending, printing, delivering, completed, aborted)
- printing house
- shop
- ordered books (IDs and quantities)
- delivery information (address, deliverer, tracking link...)
- timestamps (added, printed, delivery started, completed, aborted...)
- fees (publisher fee, printhouse fee, delivery fee, libliscool fee)
- notes (JSON with additional information)

Order management:
- start fulfilling the order (download book for printing and delivering)
- change status (in print, in delivery, completed)
- abort
`)])}const h=n(i,[["render",d]]);export{h as default};
