
#ifndef __GESTUREDATA_H
#define __GESTUREDATA_H

#include <TooN/numerics.h>

struct GestureData{
	Vector<3> mCenterPosition;

	bool mbIsValid;	//validity of the gesture
};

#endif