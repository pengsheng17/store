tbody.onclick = function (e) {
    
    //    console.log(e.target.innerHTML)
    if (e.target.innerHTML === '删除') {
        let choose = confirm('确定删除吗')
        if (choose) {
            let id = e.target.parentNode.parentNode.getAttribute('index')
            utils.fetch('./api/v1/shop/delete.php', { id }).then(rsp => { 
                if (rsp.code === 200) {
                    getData()
                }
                
               
            })
                
        }
    }
    
}