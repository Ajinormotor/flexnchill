export type MoviePaginationProps = {
    itemPerPage: number,
     data:number, 
     paginate: (pageNumber: number) => void; 
     currentPage:number
}