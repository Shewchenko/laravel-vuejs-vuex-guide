<?php

if (! function_exists('asset_time')) {

    function asset_time(string $path):string
    {
        return '?t=' . filemtime($path);
    }

}
