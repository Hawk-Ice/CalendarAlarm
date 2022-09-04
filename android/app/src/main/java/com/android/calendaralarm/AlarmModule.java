package com.android.calendaralarm;

import static android.content.Context.ALARM_SERVICE;
import static androidx.core.content.ContextCompat.getSystemService;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AlarmModule extends ReactContextBaseJavaModule {


    private static ReactApplicationContext reactApplicationContext;
    private AlarmManager alarmManager;
    private PendingIntent pendingIntent;

    AlarmModule(ReactApplicationContext context){
        super(context);
        reactApplicationContext = context;
    }
    @ReactMethod
    public void showToast(String str){
        Toast.makeText(reactApplicationContext, str, Toast.LENGTH_LONG).show();
    }
    @ReactMethod
    public void notifyAlarm(String timeStamp){
        alarmManager = (AlarmManager) reactApplicationContext.getSystemService(ALARM_SERVICE);
        Intent intent = new Intent(reactApplicationContext, AlertReceiver.class);
        pendingIntent = PendingIntent.getBroadcast(reactApplicationContext, 0,intent, PendingIntent.FLAG_IMMUTABLE);
        alarmManager.setExact(AlarmManager.RTC_WAKEUP,Long.parseLong(String.valueOf(timeStamp)), pendingIntent);

        Toast.makeText(reactApplicationContext, "ALarm set at "+timeStamp, Toast.LENGTH_SHORT).show();
    }
    @NonNull
    @Override
    public String getName() {
        return "AlarmModule";
    }
}
