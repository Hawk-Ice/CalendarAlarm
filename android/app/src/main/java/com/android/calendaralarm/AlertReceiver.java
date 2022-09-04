package com.android.calendaralarm;

import static androidx.core.content.ContextCompat.getSystemService;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;

import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

public class AlertReceiver extends BroadcastReceiver {

    // this function is for when
    @Override
    public void onReceive(Context context, Intent intent) {

        // this is basically a notification ?
        // maybe a trigger for when the receiver receives the intent from the alarm manager
        NotificationCompat.Builder builder = new NotificationCompat.Builder(context,"alarmchannel")
                .setSmallIcon(R.drawable.splashscreen)
                .setContentTitle("Alarm Manager Title")
                .setContentText("Context Text Context Text Context Text Context Text")
                .setAutoCancel(true)
                .setDefaults(NotificationCompat.DEFAULT_ALL)
                .setPriority(NotificationCompat.PRIORITY_HIGH);

        NotificationManagerCompat notificationManagerCompat = NotificationManagerCompat.from(context);
        notificationManagerCompat.notify(123,builder.build());
    }
}

// the use of this notification channel is to be able to customize the behavior of the app
// its done only after installing and reinstalling the app. If its not done properly
// the use might disable the app notifications entirely.

//if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
//            CharSequence name = "The name is test ALARM";
//            String description = "This is test alarm";
//            int importance = NotificationManager.IMPORTANCE_DEFAULT;
//            NotificationChannel channel = new NotificationChannel("CHANNEL_ID", name, importance);
//            channel.setDescription(description);
//            // Register the channel with the system; you can't change the importance
//            // or other notification behaviors after this
////            NotificationManager notificationManager = getSystemService(NotificationManager.class);
////            notificationManager.createNotificationChannel(channel);
//        }