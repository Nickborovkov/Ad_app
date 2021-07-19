import styles from "../../components/users/users.module.css";
import React, {useState} from "react";

let Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }

    let [portionNumber, setPortionNumber] = useState(1)

    let leftPaginatorBorder = (portionNumber - 1) * portionSize + 1
    let rightPaginatorBorder = portionNumber * portionSize

    let lastPortion = Math.ceil(pagesCount / portionSize)


    return (
        <div className={styles.pages}>

            {
                portionNumber > 1 && <div className={styles.paginatorButtonsHolder}>
                    <button className={styles.paginatorButton}
                            onClick={() => {setPortionNumber(1)}}>{`<<`}</button>
                    <button className={styles.paginatorButton}
                            onClick={() => {setPortionNumber(portionNumber - 1)}}>{`<`}</button>
                </div>

            }

            {
                pages.filter(p => p >= leftPaginatorBorder && p <= rightPaginatorBorder).map(p => {
                    return (
                        <div className={styles.page}>
                            <div className={currentPage === p && styles.activePage}
                                 onClick={ () => {onPageChanged(p)} }>
                                {p}
                            </div>
                        </div>
                    )
                })
            }

            {
                portionNumber <  lastPortion &&
                <div>
                    <button className={styles.paginatorButton}
                            onClick={() => {setPortionNumber(portionNumber + 1)}}>{`>`}</button>
                    <button className={styles.paginatorButton}
                            onClick={() => {setPortionNumber(lastPortion)}}>{`>>`}</button>
                </div>

            }


        </div>
    )

}

export default Paginator