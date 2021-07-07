<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\AbstractController;
use Inertia\Response;

class HomeController extends AbstractController
{
    public function index(): Response
    {
        return inertia()->render('Home');
    }
}
