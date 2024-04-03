# Generated by Django 5.0.3 on 2024-03-28 18:44

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0003_remove_note_preview_alter_note_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='tags',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=50), default=[], size=None),
            preserve_default=False,
        ),
    ]
