<?php

namespace App\Http\Controllers;


use App\Shop;
use App\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Request;

class AppController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('app');
    }

    public function allUsers(Request $request)
    {
        /** Создадим моки */
        $collection = new Collection();
        $collection->add(new User(['id' =>1, 'name' => 'one', 'email' => 'one@mail.com']));
        $collection->add(new User(['id' =>2, 'name' => 'two', 'email' => 'two@mail.com']));
        $collection->add(new User(['id' =>3, 'name' => 'three', 'email' => 'three@mail.com']));
        return response()->json($collection);
    }

    public function allShops(Request $request)
    {
        /** Создадим моки */
        $collection = new Collection();
        $collection->add(new Shop(['id' =>1, 'name'=>'shop1', 'address'=>'address1']));
        $collection->add(new Shop(['id' =>2,'name'=>'shop2', 'address'=>'address2']));
        $collection->add(new Shop(['id' =>3,'name'=>'shop3', 'address'=>'address3']));
        $collection->add(new Shop(['id' =>4,'name'=>'shop4', 'address'=>'address4']));
        return response()->json($collection);
    }
}
