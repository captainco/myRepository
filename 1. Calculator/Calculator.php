<?php
class calculator{
	public function calculate(Operator $operation, float $a, float $b) : float
	{
		return $operation->Operator($a, $b);	
	}
}

interface Operator{
	public function operator(float $a,float $b);
}

class Addition implements Operator{
	public function operator(float $a, float $b) : float {
		return $a + $b;
	}
}

class Subtraction implements Operator{
	public function operator(float $a, float $b) : float {
		return $a - $b;
	}
}

class Multiplication implements Operator{
	public function operator(float $a, float $b) : float {
		return $a * $b;
	}
}

class Division implements Operator{
	public function operator(float $a, float $b) : float {
		if ($b == 0) {
			throw new Exception("Division by zero");
		} else
			return $a / $b;
	}
}

$cal = new calculator();
echo $cal->calculate(new Addition(), 2, 3);
try {
	$cal->calculate(new Division(), 2, 0);
}
catch (Exception $e){
	echo 'Result: '.$e->getMessage();
}