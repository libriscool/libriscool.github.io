import{_ as t,b as s,h as e,d as o,a as n}from"./index-a9f90031.js";const r={},a={style:{"white-space":"pre-wrap"}},i=o("h1",null,"Offered books",-1),l=o("b",null,"Offered list",-1);function f(c,h){return n(),s("pre",a,[e(""),i,e(`
Information about books offered by the libris.cool to the bookstore and book list management.

`),l,e(` - this is a book list, that will be send to a shop plugin in response to API request. The list can be compiled manually by the user from available books or generated automatically using assigned filters.

The page can be accessed by users with shopman role or by administrators.

If current user have registered more that one shop or he is a portal administrator, he can see offered books for all shops or choose one.

Manual management of the offered book list:
- add book to offered list from available books
- remove book from offered list
- suspend the book offering for the shop

Managing the filter for offered books:
- filter by publisher
- filter by topic (children's, art, technical...)
- filter by publication date
- ...

`)])}const d=t(r,[["render",f]]);export{d as default};
