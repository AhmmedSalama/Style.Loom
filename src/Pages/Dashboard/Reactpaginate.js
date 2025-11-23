import ReactPaginate from 'react-paginate';
import './Reactpaginate.css';



 export default function PaginatedItems({ itemsPerPage , totaldata , setpage }) {
  const PageCount = totaldata ? Math.ceil(totaldata / itemsPerPage) : 0;



  return (



    
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={(e) => setpage(e.selected +1)}
        pageRangeDisplayed={5}
        pageCount={PageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        className="pagination"
        activeClassName="selected"
        disabledClassName="disabled"
        breakClassName="break"
      />
    </>
  );
}
