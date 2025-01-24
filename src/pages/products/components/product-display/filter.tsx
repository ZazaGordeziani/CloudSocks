// import { Button } from '@/components/ui/button'
// import { getProductsListInFilter } from '@/pages/products/components/product-display'
// import { useForm, Controller } from 'react-hook-form'
// // import { useTranslation } from 'react-i18next'

// type ProductFilterFormValues = {
//     searchText: string
// }

// const productFilterFromDefaultValues = {
//     searchText: '',
// }
// const ProductsFilter = () => {
//     // const { t } = useTranslation()
//     const { control, handleSubmit } = useForm<ProductFilterFormValues>({
//         defaultValues: productFilterFromDefaultValues,
//     })

//     const onSubmit = (searchFormValues: ProductFilterFormValues) => {
//         console.log(searchFormValues)
//         getProductsListInFilter(searchFormValues)
//     }

//     return (
//         <div className="flex w-full justify-center">
//             <div className="flex w-[284px] items-center gap-2 lg:w-[400px]">
//                 <Controller
//                     name="searchText"
//                     control={control}
//                     render={({ field }) => (
//                         <input
//                             {...field}
//                             className="w-[210px] rounded-md border-2 border-solid border-black p-3 text-black lg:w-[400px]"
//                             placeholder="Enter Search Text"
//                             required
//                         />
//                     )}
//                 />
//                 <Button onClick={handleSubmit(onSubmit)}>Filter</Button>
//             </div>
//         </div>
//     )
// }

// export default ProductsFilter
