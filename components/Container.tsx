interface Props {
    children: React.ReactNode;
    className?: string;
  }

const Container = ({children, className}: Props) => {
  return (
    <div className={`w-[900px] max-w-screen-xl mx-auto py-5 px-4 lg:px-0 ${className}`}>
         {children}
    </div>
  )
}

export default Container





 
    // {
    //   "id": 903,
    //   "links": "/",
    //   "img": "BlackTragbada",
    //   "title": "A Black Cross Neck Tragbada",
    //   "prevPrice": 334522,
    //   "price": 350000,
    //   "brand": "unknown",
    //   "new": true,
    //   "rating": 4,
    //   "description": "A Charcoal Black, slide-cut cape, front flap with studded Swarovski buttons, Studded cross, 3/4 sleeve African senator. What you get: A Charcoal Black, slide-cut cape, front flap with studded Swarovski buttons, Studded cross, 3/4 sleeve African senator kaftan native. Pant trousers"
    // },
    // {
    //   "id": 99383,
    //   "links": "/",
    //   "img": "BlackTragbada2",
    //   "title": "A Black Cross Neck Tragbada 2",
    //   "prevPrice": 300943,
    //   "price": 250000,
    //   "brand": "unknown",
    //   "rating": 4,
    //   "description": "A Charcoal Black, slide-cut cape, front flap with studded Swarovski buttons, 3/4 sleeve African senator kaftan native. What you get: A Charcoal Black, slide-cut cape, front flap with studded Swarovski buttons, 3/4 sleeve African senator kaftan native. Pant trousers Available in any colour. Items are separately priced Hat"
    // },
    // {
    //   "id": 49753,
    //   "links": "/",
    //   "img": "Burgundy",
    //   "title": "A Burgundy, zip line with arewa embroidery, shirt sleeve African senator kaftan native.",
    //   "prevPrice": 3,
    //   "price": 250000,
    //   "brand": "unknown",
    //   "rating": 4,
    //   "description": "A Burgundy, zip line with arewa embroidery, shirt sleeve African senator kaftan native. What you get: A Burgundy, zip line with arewa embroidery, shirt sleeve African senator kaftan native. Pant trousers Available in any colour. Items are separately priced Hat"
    // },
    // {
    //   "id": 9068976,
    //   "links": "/",
    //   "img": "Embroidery",
    //   "title": "A Charcoal Black, Quadrant Medulla Embroidery Details Agbada",
    //   "prevPrice": 323554,
    //   "price": 250000,
    //   "new": true,
    //   "brand": "unknown",
    //   "rating": 4,
    //   "description": "A Charcoal black, quadrant medulla embroidery details agbada, long sleeve kaftan & Sokoto What you get: A Charcoal black, quadrant medulla embroidery details agbada Long sleeve kaftan Sokoto Available in any colour. Items are separately priced Hat"
    // },
    // {
    //   "id": 9038623,
    //   "links": "/",
    //   "img": "GreenAfricanSenator",
    //   "title": "An Emerald Green, Front Flap With Studded Swarovski Buttons, 3/4 Sleeve African Senator Kaftan Native.",
    //   "prevPrice": 335111,
    //   "price": 250000,
    //   "brand": "unknown",
    //   "rating": 4,
    //   "description": "An Emerald Green, front flap with studded Swarovski buttons, 3/4 sleeve African senator kaftan native. What you get: An Emerald Green, front flap with studded Swarovski buttons, 3/4 sleeve African senator kaftan native. Pant trousers Available in any colour. Items are separately priced Hat"
    // },
    // {
    //   "id": 9031343,
    //   "links": "/",
    //   "img": "GreyKaftan",
    //   "title": "A Grey Front Flap With A Clear View Swarovski Crystal Button, Short-Sleeve African Senator Kaftan Native.",
    //   "prevPrice": 32466,
    //   "price": 250000,
    //   "brand": "unknown",
    //   "new": true,
    //   "rating": 4,
    //   "description": "A grey front flap with a clear view Swarovski crystal button, short-sleeve African senator kaftan native. What you get: A grey front flap with a clear view Swarovski crystal button, short-sleeve African senator kaftan native. Pant trousers Available in any colour. Items are separately priced Hat"
    // },
    // {
    //   "id": 90336548,
    //   "links": "/",
    //   "img": "LapisBlue",
    //   "title": "A Lapis Blue, Zipline with connected square and triangle bar-tacking details, short sleeve African senator Kaftan native.",
    //   "prevPrice": 33466,
    //   "price": 250000,
    //   "brand": "unknown",
    //   "rating": 4,
    //   "description": "A grey front flap with a clear view Swarovski crystal button, short-sleeve African senator kaftan native. What you get: A grey front flap with a clear view Swarovski crystal button, short-sleeve African senator kaftan native. Pant trousers Available in any colour. Items are separately priced Hat"
    // },
    // {
    //   "id": 9024513,
    //   "links": "/",
    //   "img": "IrishAfricanSenator",
    //   "title": "An Irish cream, zip line with dispersed arewa embroidery, 3/4 sleeve African senator Kaftan native.",
    //   "prevPrice": 32346,
    //   "price": 250000,
    //   "brand": "unknown",
    //   "rating": 4,
    //   "description": "An Irish cream, zip line with dispersed arewa embroidery, 3/4 sleeve African senator Kaftan native. What you get: An Irish cream, zip line with dispersed arewa embroidery, 3/4 sleeve African senator Kaftan native. Pant trousers Available in any colour. Items are separately priced Hat"
    // },
  
    // {
    //   "id": 90345623,
    //   "links": "/",
    //   "img": "Tortillabrownkaftan",
    //   "title": "Tortilla brown 3/4 sleeve kaftan.",
    //   "prevPrice": 33467,
    //   "price": 250000,
    //   "brand": "unknown",
    //   "rating": 4,
    //   "description": "A tortilla brown, Zipline, 3/4 sleeve African senator Kaftan native. What you get: A tortilla brown, Zipline, 3/4 sleeve African senator Kaftan native Pant trousers Available in any colour. Items are separately priced Hat"
    // },
    // {
    //   "id": 903458994,
    //   "links": "/",
    //   "img": "TraditionalAgbada",
    //   "title": "A Chocolate Brown, Arewa Embroidery, Traditional Agbada.",
    //   "prevPrice": 334613,
    //   "price": 250000,
    //   "brand": "unknown",
    //   "rating": 4,
    //   "description": "A Chocolate brown, Arewa embroidery, traditional Agbada, dashiki & Sokoto What you get: A Chocolate brown, Arewa embroidery, traditional Agbada Dashiki Sokoto Available in any colour. Items are separately priced Hat"
    // },
    // {
    //   "id": 90234563,
    //   "links": "/",
    //   "img": "Iwalewa",
    //   "title": "The “Iwalewa” Trad.",
    //   "prevPrice": 313466,
    //   "price": 250000,
    //   "brand": "unknown",
    //   "rating": 4,
    //   "description": "A Jointed Stripe, mixed brown & orange layered back close kimono with embroidery details, Damask 3/4 sleeve kaftan & Sokoto What you get: A Jointed Stripe, mixed brown & orange layered back close kimono with embroidery details Damask 3/4 sleeve kaftan Pant trousers Available in any colour. Items are separately priced Hat"
    // }