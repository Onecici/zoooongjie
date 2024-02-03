<?php
// $定义变量可以重复赋值相当于let 

// 定义多个命名空间
// 命名空间只对 类、函数、常量 才有效, $变量无效所以也属于全局上的变量
namespace aa {
    const cc = 123;

    $myCar = new Car("Toyota", "Corolla");
    $name = 'assaa';
    $age = 20;
    $isStudent = true;

    class Car
    {
        public $brand;
        public $model;

        // php中construct定义方式
        function __construct($brand, $model)
        {
            $this->brand = $brand;
            $this->model = $model;
        }

        public function displayInfo()
        {
            echo "This car is a " . $this->brand . " " . $this->model;
        }
    }



    function getNa($n)
    {
        return '<div class="red" >' . $n . '</div>';
    }
}

namespace bb {
    const cc = 123;

    $name = 'asasas85585855'; // 定义两个$name以最后赋值的为准

    class Car
    {
        public $title;
        public $info;

        function __construct($title, $info = "haha")
        {
            $this->title = $title;
            $this->info = $info;
        }
    }

    function getNa($n)
    {
        return '<div class="red" >' . $n . '</div>';
    }
}
