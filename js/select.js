const tbody = document.querySelector('#tbody-list')

function getData() {
    utils.fetch('./api/v1/shop/select.php').then(rsp => {
        if (rsp.code === 200) {
            const { list } = rsp.body
            let str=''
            list.forEach( (item, index)=> {
                str +=  ` <tr index="${item.id}">
                <td>${index+1}</td>
                <td>
                    <span>${item.goodsName}</span>
                    <input type="text">
                </td>
                <td><span>${item.goodsPrice}</span><input type="text"></td>
                <td><span>${item.goodsNum}</span><input type="text"></td>
                <td>
                    <button class="btn btn-danger btn-xs btn-delet">删除</button>
                    <button class="btn btn-warning btn-xs btn-edit" >编辑</button>
                    <button class="btn btn-success btn-xs btn-ok">确定</button>
                    <button class="btn  btn-info btn-xs btn-canle">取消</button>
                </td>
            </tr>`
            })
            tbody.innerHTML = str
        }
        else {
            alert('请求失败')
        }
    
    })
}
getData()
