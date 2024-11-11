#include "include/video_plugin/video_plugin_c_api.h"

#include <flutter/plugin_registrar_windows.h>

#include "video_plugin.h"

void VideoPluginCApiRegisterWithRegistrar(
    FlutterDesktopPluginRegistrarRef registrar) {
  video_plugin::VideoPlugin::RegisterWithRegistrar(
      flutter::PluginRegistrarManager::GetInstance()
          ->GetRegistrar<flutter::PluginRegistrarWindows>(registrar));
}
