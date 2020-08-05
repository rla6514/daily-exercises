<?php

namespace Exercises\Testing;

use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    public function testUserObjectCanBeCreated()
    {
      $user = new \User;

      $this->assertInstanceOf('User', $user);
    }

    public function testUserObjectCanBeCreatedWithEmailAddress()
    {
      $user = new \User('john.doe@email.com');

      $this->assertEquals('john.doe@email.com', $user->email);
    }

    public function testIvalidEmailAddressCausesException()
    {
      $this->expectException('InvalidArgumentException');

      $user = new \User('asdfghjk');
    }

/*     public function testUserCanBeUsedAsAString()
    {
      $user = new \User('john.doe@email.com');

      $string = (string)$user;

      $this->assertEquals($string, 'john.doe@email.com');
    } */
}