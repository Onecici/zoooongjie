<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .red {
            color: red;
        }
    </style>
</head>

<body>
    <?php
        // 最上层引入php文件之后该层级以下的所有php标签语法都可以使用这个引入的php文件的变量函数 
        require "./const/var.php";
    ?>
    <header>
        <h1>
            <?php
            // 获取对象中的属性方法 使用 -> 来获取
            $myCar->displayInfo();
            ?>
        </h1>
    </header>
    <div>
        <?php
        // echo用于输出内容到当前php标签所在的html元素中
        if (is_string($name)) {
                        // 使用命名空间下的方法 
            echo "Name: " . aa\getNa($name) . "<br>";
        } else {
            echo "Name: " . 'number' . "<br>";
        }

        if ($age === 20) {
            echo aa\getNa("Age: " . $age . "<br>");
        } else {
            echo "Age: " . $age . "<br>";
        }

        echo "Is student? " . ($isStudent ? "Yes" : "No") . "<br>";
        ?>
    </div>
</body>

</html>