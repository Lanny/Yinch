#!/usr/bin/env python

import glob
import json
from os import path

def read_all(src_dir):
    shaders = {}
    source_files = glob.glob(path.join(src_dir, '*.glsl'))

    for file_name in source_files:
        with open(file_name) as in_file:
            shader_name = path.split(file_name)[-1][:-5]
            shaders[shader_name] = in_file.read()

    return shaders

if __name__ == '__main__':
    base_dir = path.join(*path.split(path.realpath(__file__))[:-1])
    src_dir = path.join(base_dir, 'src/glsl/')
    dest_file = path.join(base_dir, 'src/js/yinch/combinedShaders.js')

    shaders = read_all(src_dir)

    with open(dest_file, 'w') as out:
        out.write('goog.provide("yinch.shaders");')
        out.write('yinch.shaders=')
        json.dump(shaders, out)
        out.write(';')

