<?php
include_once("{$_SERVER['DOCUMENT_ROOT']}/php/init.php");
header('Content-type: text/html; charset=utf-8');

/*-------------------------- Входные переменные -----------------------------*/
//$Org_id = trim ((!empty($_GET['org'])) ? $_GET['org'] : "1" ); // 
/*---------------------------------------------------------------------------*/

    $db = ConnectMyDB('Scan_docs');

/*---------------------------------------------------------------------------*/

$method = $_SERVER['REQUEST_METHOD'];
$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
//print_r(substr(@$_SERVER['PATH_INFO'], 1));

//$params = parseRequest($method);

switch ($method) {
  case 'GET':  // SELECT
	_get_data($db,$_GET);
    break;
  case 'POST':  // SELECT
	_get_data($db,$_POST);
    break;
}


function _get_data($db,$params){	// Вывести список записей
$data = array();	

//print_r($params);

	$begin = ( @$params['dateBegin'] ) ? " cdate >= str_to_date('".str_replace('T00:00:00','',@$params['dateBegin'])."', '%Y-%m-%d') " : "";
	$end   = ( @$params['dateEnd'] )   ? " cdate <= str_to_date('".str_replace('T00:00:00','',@$params['dateEnd'])."', '%Y-%m-%d') " : "";
	$otdel = ( @$params['Otdel'] )     ? " n1 = ".@$params['Otdel']." " : "";

	$sql = "select * from v\$cad_nums ";
	if ( $begin OR $end OR $otdel ) {
		$sql.= " where ";
		if ( $begin AND $end ) { $sql .= $begin ." AND ". $end;
		} elseif ( $begin AND !$end ) {	$sql .= $begin;
		} elseif ( !$begin AND $end ) {	$sql .= $end;}
		if ( $otdel AND ($begin OR $end) ) { $sql .= " AND ".$otdel;
		} else { $sql .= $otdel;}
	}	
	$sql .= " ORDER BY n2";
	
	//echo $sql;
	
	
	//$sql = "SELECT * FROM v\$cad_nums ORDER BY n2"; //WHERE Org_ID='.$Org_id.'
	if ( $result = $db->query( $sql ) ) {
//		$rows = array();
//		$cnt = 0;

		while ($row = $result->fetch_assoc()) {
			$data[] = [
				'id' => $row['id'],
				'cdate' => $row['cdate'],
				'cad_num' => $row['cad_num'],
				'count_files' => $row['count_files']/2,
				'count_size' => round($row['count_size']/(1024*1024),1),
				'name' => $row['name'],
				'n2' => $row['n2']
			];
//			array_push($data, $row);
//			$cnt++;
		}
		$c = array('success'=>0,'data'=>$data);
		echo json_encode($c);
	}
}
?>