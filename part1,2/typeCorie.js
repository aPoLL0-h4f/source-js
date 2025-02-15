// Type Coercion : việc chuyển đổi từ kiểu dữ liệu này sang kiểu dữ liệu khác

/**
-- string(+), boolean(|| && !), number conversion(+ - \ * / % > < >= <= | & ^ ~ ==)

-- khi thực hiện việc chuyển đổi (type coercion) nếu có toán tử dấu cộng(+) với vế có chuỗi(string) thì nó sẽ convert sang **String**

-- nếu toán tử dấu(+ - \ * / % > < >= <= | & ^ ~ ==) thì nó sẽ convert sang **number**


-- nếu có toán tử logical(|| && !) thì nó sẽ convert sang **boolean**

-- null chỉ bằng null hoặc undifined khi sử dụng 2 dấu (==) VD: null == null, null == undifined còn lại những cái khác nó sẽ là false

-- NaN thực hiện toán tử với số thì trả ra kết quả là NaN 

-- NaN ko bằng bất cứ giá trị nào kể cả chính nó

-- Nếu so sánh chuỗi với chuỗi thì ko convert sang gì cả

 */

// VD

/**
 1/
  true + false -> Number(true) + Number(false)
                => 0 + 1 = 1


  2/
  12 / "6" -> 12 / Number("6")
          => 12/6=2

  3/
 "number" + 15 + 3 -> nếu có 3 cái thì nó sẽ chạy từ trái qua phải nó sẽ chạy 2 cái đầu trc => ("number" + 15) + 3
    => "number15" + 3 = "number153"

  3.1/
  15 + 3 + "number" => (15+3)+"number"
                    => 18 + "number" = "18number"

  4/
  "foo" + + "bar" => nó sẽ ưu tiên cái "bar" trc
   -> "foo" + (+ "bar")
   -> "foo" + NaN -> "foo" + "NaN" => "fooNaN"

  5/
  "true" == true -> Number("true") == Number(true)
                  => NaN == 1 -> false

  6/
  false == "false" -> Number(false) == Number("false")
                    => 0 + NaN -> false
  
  7/
  null == "" 
    => false


  8/
  !!"false" == !!"true" -> Boolean("false") == Boolean("true") , khi ta Boolean của chuỗi thì nó convert sang truthy value
    => true == true


  9/
  +"123s" => NaN
 
  */
