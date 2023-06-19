<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Skill;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class SkillController extends Controller
{
    //
    public function index()
    {
        return response()->json([
            'skills' => Skill::all()
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:2|max:20',
            'slug' => 'required|unique:skills,slug'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        Skill::create([
            'name' => $request->name,
            'slug' => $request->slug,
        ]);
        return response()->json([
            'Skill created'
        ]);
    }

    public function show($id) {
        return response()->json([
            'skill' => Skill::find($id)
        ], 200);
    }

    public function update(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:2|max:20',
            'slug' => 'required|unique:skills,slug,' . $id,
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        $skill = Skill::find($id);
        $skill->update([
            'name' => $request->name,
            'slug' => $request->slug,
        ]);

        return response()->json([
            'message' => 'Update successfull',
            'skill' => $skill,
        ], 200);
    }

    public function destroy($id) {
        $skill = Skill::find($id)->delete();

        return response()->json(null, 204);
    }
}
