

export const viewBooks = (bookArr) => {

    const books = bookArr.map(el => {
        return `<tr>
                    <th scope="row">${el.ID}</th>
                    <td>${el.author}</td>
                    <td>${el.title}</td>
                    <td>${el.ISBN}</td>
                </tr>`
    })
    
    return books.join("");
}


