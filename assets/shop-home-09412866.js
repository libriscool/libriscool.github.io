import{_ as o,b as s,h as e,d as t,a as n}from"./index-a9f90031.js";const a={},r={style:{"white-space":"pre-wrap"}},c=t("h1",null,"Bookstore homepage",-1);function i(h,l){return n(),s("pre",r,[e(""),c,e(`
Summary about bookstore current state and bookstores management

The page can be accessed by users with shopman role or by administrators.

If current user have registered more that one shop or he is a portal administrator, information is shown separately for each shop.

Shop properties:
- title
- URL
- contacts (person name, email, phone, address)
- bank account for transferring fees
- API access token (for using in the shop plugin to access libris.cool API)

Displayed statistic:
- books: number of offered books, number of sold books...
- finances: money received from the sale (totally, in last month)...
- activity: time of last sale, time of last request of book list...

Shop management (available only for administrators):
- register new shop
- connect additional users to the shop (the users will have access to the shop)
- disconnect users from the shop
- create/lock/unlock API access token
- edit the shop properties 
- unregister shop
`)])}const m=o(a,[["render",i]]);export{m as default};
