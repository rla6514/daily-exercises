<?php

namespace Exercises\Testing;

use PHPUnit\Framework\TestCase;

class MathTest extends TestCase
{
    public function testBoolean()
    {
        $this->assertTrue(true);
    }

    public function testMultiplyResult()
    {
        $result = Math::multiply(3, 5);

        $this->assertSame($result, 15);

    }

    public function testDivideResult()
    {
        $result = Math::divide(15, 5);

        $this->assertSame($result, 3);

    }

    public function testDivideFirstArgumentNotNumericThrowsException()
    {
        $this->expectException('InvalidArgumentException');

        Math::divide('abc', 2);
    }

    public function testDivideSecondArgumentNotNumericThrowsException()
    {
        $this->expectException('InvalidArgumentException');

        Math::divide(10, 'abc');
    }



    public function testDivideByZeroThrowsException()
    {
        $this->expectException('PHPUnit\Framework\Error\Warning');

        Math::divide(10, 0);

    }
}