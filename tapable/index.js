/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

import SyncHook from "./SyncHook";

// exports.__esModule = true;
// exports.SyncHook = require("./SyncHook");
// exports.SyncBailHook = require("./SyncBailHook");
// exports.SyncWaterfallHook = require("./SyncWaterfallHook");
// exports.SyncLoopHook = require("./SyncLoopHook");
// exports.AsyncParallelHook = require("./AsyncParallelHook");
// exports.AsyncParallelBailHook = require("./AsyncParallelBailHook");
// exports.AsyncSeriesHook = require("./AsyncSeriesHook");
// exports.AsyncSeriesBailHook = require("./AsyncSeriesBailHook");
// exports.AsyncSeriesLoopHook = require("./AsyncSeriesLoopHook");
// exports.AsyncSeriesWaterfallHook = require("./AsyncSeriesWaterfallHook");
// exports.HookMap = require("./HookMap");
// exports.MultiHook = require("./MultiHook");


import SyncHook from './SyncHook';
import SyncBailHook from './SyncBailHook';
import SyncWaterfallHook from './SyncWaterfallHook';
import SyncLoopHook from './SyncLoopHook';
import AsyncParallelHook from './AsyncParallelHook';
import AsyncParallelBailHook from  './AsyncParallelBailHook';
import AsyncSeriesHook from './AsyncSeriesHook';
import AsyncSeriesBailHook from './AsyncParallelBailHook';
import AsyncSeriesLoopHook from './AsyncSeriesLoopHook';
import AsyncSeriesWaterfallHook from './AsyncSeriesWaterfallHook';
import HookMap from './HookMap';
import MultiHook from './MultiHook';


export {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesLoopHook,
	AsyncSeriesWaterfallHook,
	HookMap,
	MultiHook

};