import{_ as r,b as o,h as e,d as n,a as s}from"./index-a9f90031.js";const t={},a={style:{"white-space":"pre-wrap"}},d=n("h1",null,"Ordered books",-1);function i(c,p){return s(),o("pre",a,[e(""),d,e(`
Information about books ordered from the shop.

The page can be accessed by users with shopman role or by administrators.

If current user have registered more that one shop or he is a portal administrator, he can see orders from all shops or choose one.

Order information:
- state (pending, printing, delivering, completed, aborted)
- printing house
- shop
- ordered books (IDs and quantities)
- delivery information (address, deliverer, tracking link...)
- timestamps (added, printed, delivery started, completed, aborted...)
- money received from book sales
`)])}const l=r(t,[["render",i]]);export{l as default};
