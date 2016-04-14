<?php

    $_SESSION["menu"] = array("联系我们", "案例","设计师","介绍","首页");
    $_SESSION["logedin"] = "no";
    ?>
<!DOCTYPE html>
<html>
<head>
<link rel="icon" href="nd.ico"/>
<link rel="shortcut icon" href="nd.ico"/>
<link rel="stylesheet" type="text/css" href="css/mainStyle.css">
<title>Lijie Wang's Company</title>
</head>
<body class="general">
  <div class="texture" style="opacity:0.2">

  </div>
<!-- header  -->

<div class = 'map'>
  <div class = 'contactFrame'>
    <h1 class="companyTitle">NEW DESIGN 来自彗兴</h1>
    <p class="companyIntro">重庆慧兴装饰有限公司成立于1994年8月，注册资金1000万元人民币， 现为建筑装饰施工二级，设计乙级资质企业， 重庆市建筑装饰协会理事单位，曾被中国室内装饰协会推荐为首批信得过进入千家万户家庭装饰企业，多次被评为重庆市装饰行业年度先进单位。
      公司下设设计室，工程部，财务部，质安部，合同预算部，家庭分公司，加工厂。公司现有建筑结构，水电安装，工程设计，环境艺术，工艺美术，工程管理，预决算等各类专业技术，管理人员40余人，项目经理8人，拥有专业技能和丰富的实践经验的各工种技术工人150余人。拥有设计，施工的各种先进仪器，仪表，电脑，软件，机具设备等。能够满足大型装修工程设计及施工需要。
      公司依靠雄厚的设计力量，精湛的施工技术，先进的设备，优质的材料及科学的管理体系，以较短的周期，合理的造价，优良的质量竭诚为业主服务。
    </p>
    <p class="companyIntro" style="float:right;left:200px;text-align:right;top:590px">电话：612-222-1412<br/>Email:coco@yun.com
    </p>
  </div>
</div>


<div class="header">
  <div class="logo">
    <p class="icon">NEW DESIGN</p>
  </div>
  <div class="menu">
    <a href="contact.php" style="margin-right:180px" class="title"><?php echo $_SESSION["menu"][0] ?></a>
    <a href="example.php" style="margin-right:30px" class="title"><?php echo $_SESSION["menu"][1] ?></a>
    <a href="Designer.php" style="margin-right:30px" class="title"><?php echo $_SESSION["menu"][2] ?></a>
    <a href="introduction.php" style="margin-right:30px" class="title"><?php echo $_SESSION["menu"][3] ?></a>
    <a href="index.php" style="margin-right:30px" class="title"><?php echo $_SESSION["menu"][4] ?></a>
  </div>
</div>


<div class="bottom" align="center" style="opacity:0.5">
  <a class="user_behave" style="margin-right:90px" href="login.php">登录</a>
  <a class="user_behave" style="margin-left:0px" href="http://www.baidu.com">注册</a>
  <p align="center" class="address">中国重庆市渝中区邹容路38号2-3-2 400010</p>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="js/contact.js"></script>
</body>
</html>
