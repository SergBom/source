<?php
include_once("{$_SERVER['DOCUMENT_ROOT']}/php/init.php");
header('Content-type: text/html; charset=utf-8');

    $db = ConnectMyDB('portal');

$PortalName = $db->getOne("SELECT env FROM config WHERE value='portal_title'");

session_start();
//            $_SESSION['authenticated'] = "yes";
//            $_SESSION['username'] = $userName;
//            $_SESSION['domain'] = $domain;


//$sql = "SELECT id, CONCAT_WS(' ',userFm,LEFT(userIm,1),LEFT(userOt,1)) userFIO FROM `prt#users` WHERE username='{$_SESSION['username']}' AND domain_id='{$_SESSION['domain_id']}'";
$sql = "SELECT id, CONCAT_WS(' ',userFm,userIm,userOt) userFIO FROM `prt#users` WHERE username='{$_SESSION['username']}' AND domain_id='{$_SESSION['domain_id']}'";
if ( $result = $db->query( $sql ) ) {

	$row = $result->fetch_assoc();
	$userFIO = $row['userFIO'];
	$userID = $row['id'];
}	


//	$result = array();
	
//	$result['success'] = true;
//	$result['PortalName'] = $PortalName;
	echo "{
			success: true,
			data: {
					PortalName: '$PortalName',
					userFIO: '$userFIO',
					userID: '$userID'
			}
	}
	";
?>	