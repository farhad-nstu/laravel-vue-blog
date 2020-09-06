<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use App\Models\Admin\Post;

class Category extends Model
{
    protected $fillable = [
        'name'
    ];

    public function posts(){
        return $this->hasMany(Post::class);
    }
}
