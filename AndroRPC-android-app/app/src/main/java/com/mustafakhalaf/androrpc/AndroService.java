package com.mustafakhalaf.androrpc;

import android.accessibilityservice.AccessibilityService;
import android.accessibilityservice.AccessibilityServiceInfo;
import android.content.SharedPreferences;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.util.Log;
import android.view.View;
import android.view.accessibility.AccessibilityEvent;
import android.widget.EditText;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import org.json.JSONException;
import org.json.JSONObject;
import java.util.HashMap;

public class AndroService extends AccessibilityService {

    public static String SelectedIP = "";
    private static final String TAG = "AC_SERVICE";

    private static final String CHANNEL_1_ID = "";
    private static final String CHANNEL_2_ID = "";
    private static String last_app = "";

    @Override
    public void onAccessibilityEvent(AccessibilityEvent event) {

        String packageName = event.getPackageName().toString();
        PackageManager packageManager = this.getPackageManager();
        try {
            ApplicationInfo applicationInfo = packageManager.getApplicationInfo(packageName, 0);
            CharSequence applicationLabel = packageManager.getApplicationLabel(applicationInfo);
            if (!packageName.toString().equals("com.android.launcher3")) {
                if (!packageName.toString().equals(last_app)) {
                    Log.e(TAG, "app name is: " + packageName);
                    last_app = packageName.toString();
                    final RequestQueue queue = Volley.newRequestQueue(this);

                    final String url = "http://"+SelectedIP+":6999"+"/postrpc"; // your URL
                    System.out.println(SelectedIP);

                    queue.start();

                    HashMap<String, String> params = new HashMap<String,String>();
                    params.put("rpc_link", packageName);
                    params.put("rpc_name", applicationLabel.toString());

                    JsonObjectRequest jsObjRequest = new
                            JsonObjectRequest(Request.Method.POST,
                            url,
                            new JSONObject(params),
                            new Response.Listener<JSONObject>() {
                                @Override
                                public void onResponse(JSONObject response) {
                                    try {
                                        Log.d("debug", response.getString("message"));
                                    } catch (JSONException e) {
                                        e.printStackTrace();
                                    }
                                }
                            }, new Response.ErrorListener() {
                        @Override
                        public void onErrorResponse(VolleyError error) {
                            Log.d("debug", "That didn't work!");
                        }
                    });
                    queue.add(jsObjRequest);
                }
            }
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onInterrupt() {
        Log.e(TAG, "onInterrupt: oopsie");
    }

    @Override
    public void onServiceConnected() {
        super.onServiceConnected();

        AccessibilityServiceInfo info = new AccessibilityServiceInfo();
        info.eventTypes = AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED;

        info.feedbackType = AccessibilityServiceInfo.FEEDBACK_SPOKEN;

        info.notificationTimeout = 100;

        this.setServiceInfo(info);

        SharedPreferences ips = getApplicationContext().getSharedPreferences("IPS", 0);
        String IP1 = ips.getString("IP1", "");
        String IP2 = ips.getString("IP2", "");
        String IP3 = ips.getString("IP3", "");
        String SIP = ips.getString("SelectedIP", "");

        if (SIP.equals("1")) {
            SelectedIP = IP1;
        } else if (SIP.equals("2")) {
            SelectedIP = IP2;
        } else if (SIP.equals("3")) {
            SelectedIP = IP3;
        }

        Log.e(TAG, "onServiceConnected: running");
    }
}