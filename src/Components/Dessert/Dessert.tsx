// import { menuItems } from '../constant/Dessert';
// import { Coffee } from 'lucide-react';
// import Heading from '../Heading/Heading';
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';


// export default function Dessert() {
//   return (
//     <section className="w-full mx-auto mt-[80px] sm:mt-[120px] px-4">
//       <div className="container mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-[112px]">
//         {/* Image Section */}
//         <div className="w-full md:w-[448px] mb-6 md:mb-0">
//           <img
//             src="/dessert.png"
//             alt="Dessert dish"
//             width={448}
//             height={626}
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Menu Items Section */}
//         <div className="md:w-1/2 md:pl-8">
//           <div className="flex items-center mb-6">
//             <Coffee className="text-[#FF9F0D]" size={24} />
//             <Heading text="Dessert" />
//           </div>

//           <div className="space-y-8">
//             {menuItems.map((item: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; calories: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
//               <div key={index} className="border-b border-dashed border-gray-300 pb-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{item.name}</h3>
//                   <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
//                 </div>
//                 <p className="text-gray-600 mb-2">{item.description}</p>
//                 <p className="text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { menuItems } from '../constant/Dessert';
import { Coffee } from 'lucide-react';
import Heading from '../Heading/Heading';
import Image from 'next/image';

interface MenuItem {
  name: string;
  price: number;
  description: string;
  calories: number;
}

export default function Dessert() {
  return (
    <section className="w-full mx-auto mt-[80px] sm:mt-[120px] px-4">
      <div className="container mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-[112px]">
        {/* Image Section */}
        <div className="w-full md:w-[448px] mb-6 md:mb-0">

          <Image
          src="/Dessert.png"
          alt="Dessert Image"
          width={500}
          height={500}
          className="w-full h-auto rounded-lg shadow-lg"/>

        </div>

        {/* Menu Items Section */}
        <div className="md:w-1/2 md:pl-8">
          <div className="flex items-center mb-6">
            <Coffee className="text-[#FF9F0D]" size={24} />
            <Heading text="Dessert" />
          </div>

          <div className="space-y-8">
            {menuItems.map((item: MenuItem, index: number) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">${item.price}</span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


