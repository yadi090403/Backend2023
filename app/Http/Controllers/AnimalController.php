<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public $animals = ['ayam','ikan'];
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // unruk menampilkan data yang ada di animal
        foreach($this->animals as $animal){
            echo $animal . "<br>";
        }
        echo "menampilkan data animals";
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // menambahkan hewan baru ke $animals
        array_push($this->animals, $request->input("nama"));
        // menambahkan nama hewan yang ditambahkan 
        // echo "nama hewan : " . $request->store("burung");
        // $request->store('burung');
        // menampilkan data animal setelah di tammbahkan
        $this->index();
        echo "<br>";
        echo "menambah nama hewan";


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    { 
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        //
        // echo "nama hewan : " . $request->input("nama");
        // echo "<br>";
        // echo "mengupdate data hewan id $id";
        $this->animals[$id]=$request->input("nama");
        $this->index();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        if (isset($this->animals[$id])) {
            $deletedAnimal = $this->animals[$id];
            unset($this->animals[$id]);
            echo "menghapus data hewan: $deletedAnimal dengan ID $id";
        } else {
            echo "data hewan dengan ID $id tidak ditemukan";

        }
    }
}
?>