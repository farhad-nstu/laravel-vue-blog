<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use App\Models\Admin\Category;
use App\User;

class Post extends Model
{
    protected $fillable = [
        'category_id', 'user_id', 'title', 'details', 'image',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }
}
