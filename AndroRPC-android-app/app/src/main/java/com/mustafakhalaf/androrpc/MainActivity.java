package com.mustafakhalaf.androrpc;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.provider.Settings;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class MainActivity extends AppCompatActivity {

    public static ArrayList<String> apps_name = new ArrayList<String>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        load_ips();
    }

    public void load_ips() {

        SharedPreferences apps = getApplicationContext().getSharedPreferences("Apps", 0);
        String reutrnarrray = apps.getString("apps", "");
        String apps_name_str = reutrnarrray.toString().replace("[", "").replace("]", "");
        apps_name = new ArrayList<String>(Arrays.asList(apps_name_str.split(",")));

        SharedPreferences ips = getApplicationContext().getSharedPreferences("IPS", 0);
        String IP1 = ips.getString("IP1", "");
        String IP2 = ips.getString("IP2", "");
        String IP3 = ips.getString("IP3", "");
        EditText ipad1 = findViewById(R.id.IPAd1);
        EditText ipad2 = findViewById(R.id.IPAd2);
        EditText ipad3 = findViewById(R.id.IPAd3);
        ipad1.setText(IP1);
        ipad2.setText(IP2);
        ipad3.setText(IP3);
    }

    public void EnableAc(View view) {
        startActivity(new Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS));
    }

    public void SelectIP1(View view) {
        EditText ip1 = findViewById(R.id.IPAd1);
        SaveIP("1", ip1.getText().toString());
    }

    public void SelectIP2(View view) {
        EditText ip2 = findViewById(R.id.IPAd2);
        SaveIP("2", ip2.getText().toString());
    }

    public void SelectIP3(View view) {
        EditText ip3 = findViewById(R.id.IPAd3);
        SaveIP("3", ip3.getText().toString());
    }

    public void SaveIP(String num, String IPtosave) {
        AndroService.SelectedIP = IPtosave;
        SharedPreferences ips = getApplicationContext().getSharedPreferences("IPS", 0);
        SharedPreferences.Editor editor = ips.edit();
        EditText ipad1 = findViewById(R.id.IPAd1);
        EditText ipad2 = findViewById(R.id.IPAd2);
        EditText ipad3 = findViewById(R.id.IPAd3);
        editor.putString("IP1", ipad1.getText().toString());
        editor.putString("IP2", ipad2.getText().toString());
        editor.putString("IP3", ipad3.getText().toString());
        editor.putString("SelectedIP", num);
        editor.apply();
    }

    public void AddApp(View view) {
        EditText app = findViewById(R.id.AppName);
        if (!app.getText().toString().equals("")) {
            if (!apps_name.contains(app.getText().toString())) {
                apps_name.add(app.getText().toString());
                SharedPreferences appsjson = getApplicationContext().getSharedPreferences("Apps", 0);
                SharedPreferences.Editor editor = appsjson.edit();
                editor.putString("apps", apps_name.toString().replace(", ", ","));
                editor.apply();
                TextView result = findViewById(R.id.Result);
                result.setText("Added "+app.getText().toString()+"!");
            } else {
                TextView result = findViewById(R.id.Result);
                result.setText("Name was already added before!");
            }
        }
    }

    public void RmApp(View view) {
        EditText app = findViewById(R.id.AppName);
        if (!app.getText().toString().equals("")) {
            if (apps_name.contains(app.getText().toString())) {
                apps_name.remove(app.getText().toString());
                SharedPreferences appsjson = getApplicationContext().getSharedPreferences("Apps", 0);
                SharedPreferences.Editor editor = appsjson.edit();
                editor.putString("apps", apps_name.toString().replace(", ", ","));
                editor.apply();
                TextView result = findViewById(R.id.Result);
                result.setText("Removed "+app.getText().toString()+"!");
            } else {
                TextView result = findViewById(R.id.Result);
                result.setText("No such name was found");
            }
        }
    }
}