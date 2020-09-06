<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        factory(App\Models\Admin\Post::class,10)->create();
        factory(App\Models\Admin\Category::class,10)->create();
		factory(App\User::class,10)->create();

    }
}
